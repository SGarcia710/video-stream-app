import React, { useEffect } from 'react';
import '../assets/styles/components/Player.scss';
import { getVideoSource } from '../actions';
import { connect } from 'react-redux';
import ErrorNotFound from '../containers/ErrorNotFound';

const Player = props => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length;

  useEffect(() => {
    props.getVideoSource(id);
  }, []); // Si se le pasa un arreglo vacio a Hooks, no se escuchará ningún elemento cambiante.

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Go back
        </button>
      </div>
    </div>
  ) : (
    <ErrorNotFound />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = {
  getVideoSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
