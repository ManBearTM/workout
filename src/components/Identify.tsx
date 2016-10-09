import * as React from 'react'
import { browserHistory } from 'react-router'

/**
 * Renders a form that requires the user to enter their API key and optionally
 * their name. Submitting the form redirects the browser to a URL based on the
 * inputs. The URL parameters will be part of the application state, which is
 * why this is just a simple component using uncontrolled input fields.
 */
export default () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const elements = e.currentTarget.elements
    const key = elements.namedItem('key') as HTMLInputElement
    const name = elements.namedItem('name') as HTMLInputElement
    browserHistory.push(`${key.value}/${name.value || 'Voldemort'}`)
  }

  return (
    <div className="six columns" style={{marginTop:'25%'}}>
      <h4>Welcome</h4>
      <p>This is a work in progress for a web-based personal workout manager. The application is built with React and Redux on top of the <a href="https://wger.de">wger Workout Manager REST API</a>.</p>
      <p>The supplied key should work fine as a demo, but you may obtain your own key by registering an account <a href="https://wger.de/en/user/api-key">here</a>.</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="rows">
          <label>Key (required)</label>
          <input
            defaultValue="74951510872363e1bbf800f7a8620760e72a3563"
            className="u-full-width"
            name="key"
            required />
        </div>
        <div className="row">
          <label>Name (optional)</label>
          <input className="u-full-width" name="name" />
        </div>
        <input className="button-primary" type="submit" />
      </form>
    </div>
  )
}