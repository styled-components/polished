import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import List from './List'
import ListItem from './ListItem'
import Input from './Input'
import InnerWrapper from '../Wrapper'
import slug from '../../utils/slug'

const ContentWrapper = styled(InnerWrapper)`
  padding-bottom: 0;
  padding-top: 0;
`

class Nav extends React.Component {
  state = {
    search: '',
    visible: false
  }

  search = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  showList = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout)

    this.setState({
      visible: true,
    })
  }

  hideList = () => {
    // Hide after 50ms timeout to allow for the click event
    // to go through
    this.hideTimeout = setTimeout(() => {
      this.setState({
        visible: false,
      })
    }, 100)
  }

  clearInput = () => {
    this.setState({
      search: '',
    })
  }

  filterUtils = (utils) => {
    if (!utils) return []

    return utils.filter(util =>
      // We don't care about Notes
      util.kind !== 'note' &&
      // If either the name...
      (util.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
      // ..or the description contains the search term include them
      || util.description.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)
    )
  }

  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Input
            type="text"
            value={this.state.search}
            onChange={this.search}
            placeholder="Search"
            onFocus={this.showList}
            onBlur={this.hideList}
          />
          <List visible={this.state.visible}>
            {this.state.visible && this.filterUtils(global.utilities).map(util => (
              <ListItem
                key={`nav-${slug(util.namespace.toLowerCase())}`}
                href="/docs/util"
                as={`/docs/util/${slug(util.namespace.toLowerCase())}`}
                onClick={this.clearInput}
              >
                {util.name}
              </ListItem>)
            )}
          </List>
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default Nav
