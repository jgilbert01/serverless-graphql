import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGroups } from '../../actions/groups';
import { Link } from 'react-router';

class GroupsIndex extends Component {
  componentWillMount() {
    this.props.getGroups();
  }

  render() {
    const { groups } = this.props;

    return (
      <div className="row">
        <div className="twelve columns">
          <h1>Groups</h1>
          <hr />
          {groups.length ? (
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
              {groups.map((group) => {
                return (
                  <tr key={'group-' + group.name}>
                    <td>
                      <Link to={ 'groups/' + group.name + '/show' }>{group.name}</Link>
                    </td>
                    <td>{group.name}</td>
                  </tr>
                )}
              )}
              </tbody>
            </table>
          ) : <div>There are currently no groups available to display<hr /></div> }
          <Link to={ 'groups/new' } className="button button-primary">Create New Group</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { groups: state.groups.all };
}

export default connect(mapStateToProps, { getGroups })(GroupsIndex);
