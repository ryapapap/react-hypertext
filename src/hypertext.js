import React, { Component } from 'react';

export function Link(props) {
  return (<div className="inline">
  {props.active ?
    <a 
      href="#" 
      onClick={props.action}
    >
      {props.children}
    </a>
  :
    <div>
      {props.children}
    </div>
  }
  </div>);
}

export class Stanza extends Component {
  state = { 
    active: true,
    follower: null, 
  };

  content = () => null
  handleClick = (to) => {
    this.setState({ 
      active: false,
      follower: to, 
    });
  };

  link = (props) => <Link 
    active={this.state.active} 
    action={() => (this.handleClick(props.to))}
  >
    {props.children}
  </Link>

  render() {
    return (<div className="container">
      {this.content()}
      {this.state.follower}
    </div>);
  }
}
