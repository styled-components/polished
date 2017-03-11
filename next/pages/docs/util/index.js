import React from 'react'
import Util from '../../../components/Util'
import ToC from '../../../components/ToC'
import slug from '../../../utils/slug';

class UtilPage extends React.Component {
  static async getInitialProps({ req }) {
    return {
      // /utils/rem/ -> rem
      util: req && /\/(\w+)\/?$/.exec(req.url)[1],
    }
  }

  render() {
    // /utils/rem/ -> rem
    const name = this.props.util || /\/(\w+)\/?$/.exec(window.location.pathname)[1]
    const util = global.utilities.find(util => slug(util.namespace.toLowerCase()) === name)

    return (
      <div>
        <ToC utils={global.utilities} />
        {util ? <Util util={util} /> : <h1>Util not found</h1>}
      </div>
    )
  }
}

export default UtilPage;
