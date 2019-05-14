import React, { Component } from 'react';
import { Picker, Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { reportFormFieldUpdate, reportCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  
  onButtonPress() {
    const { publications, videos, hours, rvs, studies, comments, month, year } = this.props;

    this.props.reportCreate({ 
      publications,
      videos,
      hours,
      rvs,
      studies,
      comments, 
      month: month || 'January',
      year: year || '2019' 
    });
  }

  createMonthPicker() {
    const months = [
      'January', 'February', 'March', 'April', 
      'May', 'June', 'July', 'August', 'September', 
      'October', 'November', 'December'
    ];
    return months.map(month => <Picker.Item key={month} label={month} value={month} />);
  }

  createYearPicker() {
    const years = ['2019', '2020'];
    return years.map(year => <Picker.Item key={year} label={year} value={year} />);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <ScrollView>
      <Card>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Month</Text>
          <Picker   
            selectedValue={this.props.month}
            onValueChange={value => this.props.reportFormFieldUpdate({ prop: 'month', value })}
          >
            {this.createMonthPicker()}
          </Picker>
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Year</Text>
          <Picker   
            selectedValue={this.props.year}
            onValueChange={value => this.props.reportFormFieldUpdate({ prop: 'year', value })}
          >
            {this.createYearPicker()}
          </Picker>
        </CardSection>

        <CardSection>
          <Input 
            label="Publications"
            placeholder="Publications"
            value={this.props.publications}
            onChangeText={value => {
              this.props.reportFormFieldUpdate({ prop: 'publications', value });
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Videos"
            placeholder="Videos"
            value={this.props.videos}
            onChangeText={value => this.props.reportFormFieldUpdate({ prop: 'videos', value })}
          />
        </CardSection>   
        <CardSection>
          <Input
            label="Hours"
            placeholder="Hours"
            value={this.props.hours}
            onChangeText={value => this.props.reportFormFieldUpdate({ prop: 'hours', value })}
          />
        </CardSection>   
        <CardSection>
          <Input
            label="Return Visits"
            placeholder="RVs"
            value={this.props.rvs}
            onChangeText={value => this.props.reportFormFieldUpdate({ prop: 'rvs', value })}
          />
        </CardSection>   
        <CardSection>
          <Input
            label="Studies"
            placeholder="Studies"
            value={this.props.studies}
            onChangeText={value => this.props.reportFormFieldUpdate({ prop: 'studies', value })}
          />
        </CardSection>   
        <CardSection>
          <Input
            label="Comments"
            placeholder="Comments"
            value={this.props.comments}
            onChangeText={value => this.props.reportFormFieldUpdate({ prop: 'comments', value })}
          />
        </CardSection>   
         

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
      </ScrollView>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { publications, videos, hours, rvs, studies, comments, month, year } = state.reportsForm;
  return { 
    publications,
    videos,
    hours,
    rvs,
    studies,
    comments,
    month,
    year 
  };
};

export default connect(mapStateToProps, { reportFormFieldUpdate, reportCreate })(EmployeeCreate);
