import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function PublicLayout(props) {
    const {render, ...rest} = props;
    const loginSession = localStorage.getItem("loginSession");
    return (
        <Route
        {...rest}
        render={matchProps => (
          <Fragment>
            {(loginSession) ?
              <Redirect from={matchProps.path} to={"/dashboard"} />
              : <Fragment>
                {render(matchProps)}
              </Fragment>}
          </Fragment>
        )}
      />
 
        
    )
}
