import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

console.log('Login page loaded!');

var LoginComponent = React.createClass({
  render: function() {
    const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div>
         <div class="well bs-component">
          <form onSubmit={handleSubmit(this.props.makeLoginRequest.bind(this))} class="form-horizontal">
            <fieldset>
              <legend>Login</legend>
              <div class="form-group">
                <label for="inputUsername" class="col-md-2 control-label">Username</label>

                <div class="col-md-10">
                  <input type="text" class="form-control" id="inputUsername" placeholder="Username" {...username}/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-md-2 control-label">Password</label>

                <div class="col-md-10">
                  <input type="password" class="form-control" id="inputPassword" placeholder="Password" {...password}/>
                </div>
              </div>
              <button class="btn btn-success-outline" type="submit">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
});

export default LoginComponent;
