// @flow
import React from 'react';
import {Link} from '../../routes';
import {Dropdown} from './style-component';

type Props = {
  label: string,
  route: Array<{
    label: string,
    route: string,
  }>
};

type State = {
  toggle: boolean,
};

export default class DropdownMenu extends React.PureComponent<Props, State> {
  state = {
    toggle: false,
  }

  constructor(props: Props) {
    super(props);
    const self: any = this;
    self.handleToggle = self.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({toggle: !prevState.toggle}));
  }

  render() {
    const {route, label} = this.props;
    const {toggle} = this.state;

    const dropdown = (
      <Dropdown>
        <div onClick={this.handleToggle}>
          <ul>
            {route.map((item, i) => (
              <li key={i}>
                <Link route={item.route}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Dropdown>
    );

    return (
      <div style={{cursor: 'pointer'}}>
        <a className="caret" onClick={this.handleToggle}>{label}</a>
        {toggle ? dropdown : null}
      </div>
    );
  }
}
