import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends Component {
  state = {
    error: '',
    eventId: '',
    errorInfo: '',
    hasError: false,
    errRetryMax: 1,
    errRetries: Number(localStorage.getItem('errRetries')) || 0,
  };

  // during initialization, errRetries is set on state
  // as it mounts, it is reset to 0
  // once component catches an error, it reloads and
  // takes the previously saved state and increments it.
  // this continues till the threshold is reached.

  componentDidMount() {
    localStorage.setItem('errRetries', 0);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });

    const { errRetries, errRetryMax } = this.state;
    if (errRetries < errRetryMax) {
      localStorage.setItem('errRetries', errRetries + 1);
      window.location.reload();
    } else {
      Sentry.withScope((scope) => {
        scope.setExtras(errorInfo);
        const eventId = Sentry.captureException(error);
        this.setState({ eventId, errorInfo });
      });
    }
  }

  render() {
    const { hasError, error, eventId } = this.state;
    // console.log(Array.isArray(this.props.children), 'childre', this.props.children)
    if (hasError) {
      return (
        <div className="card my-5">
          <div className="card-header">
            <p>
              There was an error in loading this page.{' '}
              <span
                style={{ cursor: 'pointer', color: '#0077FF' }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
              </span>{' '}
            </p>
          </div>

          <div className="card-body">
            <details className="error-details">
              <summary>Click for error details</summary>
              {error && error.toString()}
            </details>
          </div>

          <div className="card-footer">
            <button
              className="btn btn-secondary"
              onClick={() => Sentry.showReportDialog({ eventId: eventId })}
            >
              Send feedback
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
};

export { ErrorBoundary };
