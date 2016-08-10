import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/groups';
import { Link } from 'react-router';

class GroupsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleSubmit(event) {
    event.preventDefault();

    const name = this.refs.name.value;

    if (name.length !== 0) {
      const group = {
        name
      };

      this.props.createGroup(group);
    } else {
      alert('Please fill out all fields');
    }
  }

  render() {
    return (
      <div className="row">
        <div className="four columns offset-by-four">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1>Add Group</h1>
            <hr />
            <input type="text" placeholder="Name" className="u-full-width" ref="name" />
            <input type="submit" className="button button-primary" />
            <Link to="/" className="u-pull-right button">Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { createGroup })(GroupsNew);
