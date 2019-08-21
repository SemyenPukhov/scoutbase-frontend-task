import React from 'react';
import { withRouter } from 'react-router';
import QueryWrapper from './hoc/QueryWrapper';

import {
  CountryCard,
  CountryCardTitle,
  CountryCardText,
  CountryCardButton,
  CountryCardProps,
  CountryCardProp
} from './CountryCard';

function Country(props) {
  const { code } = props.match.params;

  return (
    <QueryWrapper
      query='GET_COUNTRY'
      params={{ code: (code || '').toUpperCase() }}
    >
      {({ country }) => (
        <div className='country-container'>
          <CountryCard>
            <CountryCardTitle>
              <h3>{country.name}</h3>
            </CountryCardTitle>
            <CountryCardText>
              <CountryCardProps>
                <CountryCardProp>
                  <b>Country name:</b> <span>{country.name}</span>
                </CountryCardProp>
                <CountryCardProp>
                  <b>Country currency:</b> <span>{country.currency}</span>
                </CountryCardProp>
                <CountryCardProp>
                  {' '}
                  <b>Country phone:</b> <span>+ {country.phone}</span>
                </CountryCardProp>
              </CountryCardProps>
            </CountryCardText>
            <CountryCardButton href='/countries'>Countries</CountryCardButton>
          </CountryCard>
        </div>
      )}
    </QueryWrapper>
  );
}

export default withRouter(Country);
