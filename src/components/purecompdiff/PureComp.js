import { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    console.log("**********PC**********")
    return (
      <div>
        PureComponent {this.props.name}
      </div>
    )
  }
}

export default PureComp
