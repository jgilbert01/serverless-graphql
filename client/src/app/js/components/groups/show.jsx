import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getGroup } from '../../actions/groups';
import { Link } from 'react-router';

class GroupsShow extends Component {
  componentWillMount() {
    this.props.getGroup(this.props.params.name);
  }

  render() {
    const { group } = this.props;

    if (!group) {
      return <div className="row"><div className="twelve columns">Loading...</div></div>
    }

    return (
      <div className="row">
        <div className="four columns offset-by-four">
          <h1>{group.name}</h1>
          <hr />
          <p>{group.id}</p>
          <p>{group.name}</p>
          <hr />
          <Link to='/' className="button u-full-width">Back</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { group: state.groups.group };
}

export default connect(mapStateToProps, { getGroup })(GroupsShow);
