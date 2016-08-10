import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateGroup, deleteGroup} from '../../actions/groups';
import { Link } from 'react-router';

class GroupsEdit extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    if (confirm('Do you want to delete this group?')) {
      this.props.deleteGroup(this.props.group.name)
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const name = this.refs.name.value;

    if (name.length !== 0) {
      const group = {
        name
      };

      this.props.updateGroup(group);
    } else {
      alert('Please fill out all fields');
    }
  }

  render() {
    const {group} = this.props;

    if (!group) return null;

    return (
      <div className="row">
        <div className="four columns offset-by-four">
          <h1>Edit Group</h1>
          <hr />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Name" className="u-full-width" ref="name" defaultValue={group.name}/>
            <input type="submit" className="button button-primary" />
            <Link to="/" className="u-pull-right button">Cancel</Link>
          </form>
          <hr />
          <button onClick={this.onDeleteClick.bind(this)} className="button u-full-width">Delete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({groups: {currentGroup}}) => ({group: currentGroup});

export default connect(mapStateToProps, {updateGroup, deleteGroup})(GroupsEdit);
