import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { reportsFetch } from '../actions';

class ReportsList extends Component {
  componentDidMount() {
    this.props.reportsFetch();
  }

  renderItem(report) {
		return <Text>{report.month}</Text>;
  }
  
  render() {
    console.log(this.props.reports);
    return (
      <Text style={{ flex: 1, width: 100, height: 30 }}>{this.props.reports[0]}</Text>
      // <FlatList 
      //   data={this.props.reports}
      //   renderItem={this.renderItem.bind(this)}
      //   keyExtractor={(report) => report.uid.toString()}
      // />
    );
  }
}

const mapStateToProps = (state) => {
  const reports = _.map(state.reports, (val, uid) => {
      return { ...val, uid };
  });

  return { reports };
};

export default connect(mapStateToProps, { reportsFetch })(ReportsList);
