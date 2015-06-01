var React = require('react');
var Template = require('./Template');
var Home = require('./home/Home');
var Profile = require('./profile/Profile');
var Relationships = require('./profile/relationships/Relationships');
var TreatmentSummary = require('./profile/treatments/TreatmentSummary');
var TreatmentHistoryForm = require('./profile/treatments/general-history-form/TreatmentHistoryForm');
var Calendar = require('./calendar/Calendar');
var NotFoundPage = require('./NotFoundPage');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var NotFound = Router.NotFound;

var App = React.createClass({
  render: function() {
  	return (

  		<div>
	      <Template>
					<Locations>
						<Location path="/home" handler={Home} />
						<Location path="/profile" handler={Profile} />
						<Location path="/profile/treatments" handler={TreatmentSummary} />
						<Location path="/profile/relationships" handler={Relationships} />
						<Location path="/profile/treatments/general-history-form" handler={TreatmentHistoryForm} />
						<Location path="/calendar" handler={Calendar} />
						<NotFound handler={NotFoundPage} />
					</Locations>
				</Template>
			</div>

  	)
  }
});

module.exports = App;