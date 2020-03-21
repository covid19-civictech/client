// @flow
import React from 'react';
import { Container } from 'semantic-ui-react';

const GroupDetailsPage = props => {
  const {
    match: { params },
  } = props;

  console.log('group id: ', params.groupId);

  return <Container>Here goes the group details content</Container>;
};

export default GroupDetailsPage;
