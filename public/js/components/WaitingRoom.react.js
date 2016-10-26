var React = require('react');

var WaitingRoom = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default"> 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XyNlqQId-nk" frameborder="0" allowfullscreen></iframe>
        <div className="panel-body"> 
          <p>There are no avalible people.</p> 
          <p>When there is you will be connected immediately</p>
        </div>
      </div>
    )
  }

});

module.exports = WaitingRoom;
