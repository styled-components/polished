import React from 'react'
import slug from '../../utils/slug'
import signature from '../../utils/signature'
import formatType from '../../utils/formatType'
import md from '../../utils/markdown'

export default ({ util }) => (
	<section>
	  {(typeof nested === 'undefined' || (util.context && util.context.github)) && (
			<div>
		    {typeof nested === 'undefined' && <h3 id={slug(util.namespace)}>{util.name}</h3>}
		    {util.context && util.context.github && (
					<a href={util.context.github}>{util.context.path}</a>
				)}
		  </div>
		)}

	  {md(util.description)}

	  <div>{signature(util)}</div>
	  {util.type && <p>Type: {formatType(util.type)}</p>}
	  <% if (util.augments) { %>
	    <p>
	      Extends
	      <% if (util.augments) { %>
	        <%= util.augments.map(function(tag) {
		  return autolink(tag.name);
		}).join(', ') %>
	      <% } %>
	    </p>
	  <% } %>

	  <% if (util.version) { %><div>Version: <%- util.version %></div><% }%>
	  <% if (util.license) { %><div>License: <%- util.license %></div><% }%>
	  <% if (util.author) { %><div>Author: <%- util.author %></div><% }%>
	  <% if (util.copyright) { %><div>Copyright: <%- util.copyright %></div><% }%>
	  <% if (util.since) { %><div>Since: <%- util.since %></div><% }%>

	  <% if (util.params) { %>
	    <div class='py1 quiet mt1 prose-big'>Parameters</div>
	    <div class='prose'>
	      <% util.params.forEach(function(param) { %>
	        <div class='space-bottom0'>
	          <div>
	            <span class='code bold'><%- param.name%></span> <code class='quiet'>(<%= formatType(param.type) %><% if (param.default) { %>
	            = <code><%- param.default %></code><% } %>)</code>
		    <%= md(param.description, true) %>
	          </div>
	          <% if (param.properties) { %>
	          <table class='mt1 mb2 fixed-table h5 col-12'>
	            <colgroup>
	              <col width='30%' />
	              <col width='70%' />
	            </colgroup>
	            <thead>
	              <tr class='bold fill-light'>
	                <th>Name</th>
	                <th>Description</th>
	              </tr>
	            </thead>
	            <tbody class='mt1'>
	              <% param.properties.forEach(function(property) { %>
	                <tr>
	                  <td class='break-word'><span class='code bold'><%- property.name %></span> <code class='quiet'><%= formatType(property.type) %></code>
	                  <% if (property.default) { %>
	                    (default <code><%- property.default %></code>)
	                  <% } %></td>
	                  <td class='break-word'><span><%= md(property.description, true) %></span></td>
	                </tr>
	              <% }) %>
	            </tbody>
	          </table>
	          <% } %>
	        </div>
	      <% }) %>
	    </div>
	  <% } %>

	  <% if (util.properties) { %>
	    <div class='py1 quiet mt1 prose-big'>Properties</div>
	    <div>
	      <% util.properties.forEach(function(property) { %>
	        <div class='space-bottom0'>
	          <span class='code bold'><%- property.name%></span> <code class='quiet'>(<%= formatType(property.type) %>)</code>
	          <% if (property.default) { %>
	            (default <code><%- property.default %></code>)
	          <% } %><% if (property.description) {
		    %>: <%= md(property.description, true) %><%
		  } %>
	          <% if (property.properties) { %>
	            <ul>
	              <% property.properties.forEach(function(property) { %>
	                <li><code><%- property.name %></code> <%= formatType(property.type) %>
	                  <% if (property.default) { %>
	                    (default <code><%- property.default %></code>)
	                  <% } %>
	                  <%= md(property.description) %></li>
	              <% }) %>
	            </ul>
	          <% } %>
	        </div>
	      <% }) %>
	    </div>
	  <% } %>

	  <% if (util.returns) { %>
	    <% util.returns.forEach(function(ret) { %>
	      <div class='py1 quiet mt1 prose-big'>Returns</div>
	      <code><%= formatType(ret.type) %></code><% if (ret.description) { %>:
	        <%= md(ret.description, true) %>
	      <% }%>
	    <% }) %>
	  <% } %>

	  <% if (util.throws) { %>
	    <div class='py1 quiet mt1 prose-big'>Throws</div>
	    <ul>
	      <% util.throws.forEach(function(throws) { %>
	        <li><%= formatType(throws.type) %>: <%= md(throws.description, true) %></li>
	      <% }); %>
	    </ul>
	  <% } %>

	  <% if (util.examples) { %>
	    <div class='py1 quiet mt1 prose-big'>Example</div>
	    <% util.examples.forEach(function(example) { %>
	      <% if (example.caption) { %><p><%= md(example.caption) %></p><% } %>
	      <pre class='p1 overflow-auto round fill-light'><%= highlight(example.description) %></pre>
	    <% }) %>
	  <% } %>

	  <% if (util.members.static && util.members.static.length) { %>
	    <div class='py1 quiet mt1 prose-big'>Static Members</div>
	    <%= renderSectionList({ members: util.members.static, renderSection: renderSection, noun: 'Static Member' }) %>
	  <% } %>

	  <% if (util.members.instance && util.members.instance.length) { %>
	    <div class='py1 quiet mt1 prose-big'>Instance Members</div>
	    <%= renderSectionList({ members: util.members.instance, renderSection: renderSection, noun: 'Instance Member' }) %>
	  <% } %>

	  <% if (util.members.events && util.members.events.length) { %>
	    <div class='py1 quiet mt1 prose-big'>Events</div>
	    <%= renderSectionList({ members: util.members.events, renderSection: renderSection, noun: 'Event' }) %>
	  <% } %>
	</section>
)
