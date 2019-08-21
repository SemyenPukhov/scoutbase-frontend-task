import React from 'react';
import QueryWrapper from './hoc/QueryWrapper';
import {
  CountryCard,
  CountryCardTitle,
  CountryCardText,
  CountryCardButton,
  CountryCardProps,
  CountryCardProp,
  ArrowUp
} from './CountryCard';

function Countries() {
  const cards = React.createRef();

  return (
    <QueryWrapper query='GET_COUNTRIES'>
      {({ countries }) => (
        <div className='countries-container'>
          <div className='country-title'>
            Found countries {countries.length}
          </div>
          <div className='countries-cards' ref={cards}>
            {countries.map((country, i) => (
              <CountryCard key={i}>
                <CountryCardTitle>{country.name}</CountryCardTitle>
                <CountryCardText>
                  <CountryCardProps>
                    <CountryCardProp>
                      <b>Country code:</b> <span>{country.code}</span>
                    </CountryCardProp>
                    <CountryCardProp>
                      <b>
                        {country.languages.length > 1
                          ? 'Country Languages:'
                          : 'Country Language:'}
                      </b>
                      {country.languages.map((language, i) => (
                        <span key={i}>
                          {language.native}/{language.name}
                          {country.languages.length > 1 &&
                            i < country.languages.length - 1 &&
                            ', '}
                        </span>
                      ))}
                    </CountryCardProp>
                    <CountryCardProp>
                      <b>Located in:</b> <span>{country.continent.name}</span>
                    </CountryCardProp>
                  </CountryCardProps>
                </CountryCardText>
                <CountryCardButton href={`countries/${country.code}`}>
                  Details
                </CountryCardButton>
              </CountryCard>
            ))}
            <ArrowUp
              onClick={() =>
                cards.current.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                })
              }
            />
          </div>
        </div>
      )}
    </QueryWrapper>
  );
}

export default Countries;
