import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function MainLayout(props) {
    const {render, ...rest} = props;
    const loginSession = localStorage.getItem("loginSession");
    return (
        <Route
        {...rest}
        render={matchProps => (
          <Fragment>
            {( loginSession === null || loginSession === false) ?
              <Redirect from={matchProps.path} to={"/login"} />
              : <Fragment>
                {render(matchProps)}
              </Fragment>}
          </Fragment>
        )}
      />
 
        
    )
}
