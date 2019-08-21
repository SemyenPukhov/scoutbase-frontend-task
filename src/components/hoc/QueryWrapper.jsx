import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../Loading';
import NotFound from '../NotFound';
import Error from '../Error';
import { QUERIES } from '../../graphql';

function QueryWrapper(props) {
  const { loading, error, data } = useQuery(QUERIES[props.query], {
    variables: { ...props.params }
  });

  const noData =
    Object.values(data).includes(null) || !Object.keys(data).length;

  return (
    <>
      {loading && <Loading />}
      {!noData && !loading && props.children(data)}
      {noData && !loading && <NotFound />}
      {error && <Error />}
    </>
  );
}

export default QueryWrapper;

QueryWrapper.defaultProps = {
  params: {}
};
