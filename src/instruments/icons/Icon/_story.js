import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from 'instruments'

storiesOf('Instruments|Icons.Icon', module)
  .add('airflow_astro', () => <Icon icon="airflow_astro" />)
  .add('airflow_ring', () => <Icon icon="airflow_ring" />)
  .add('airflow', () => <Icon icon="airflow" />)
  .add('alien_ship', () => <Icon icon="alien_ship" />)
  .add('arrow_darkBg', () => <Icon icon="arrow_darkBg" />)
  .add('arrow', () => <Icon icon="arrow" />)
  .add('astro_helmet', () => <Icon icon="astro_helmet" />)
  .add('celery', () => <Icon icon="celery" />)
  .add('kubernetes', () => <Icon icon="kubernetes" />)
  .add('dag', () => <Icon icon="dag" />)
  .add('flower_astro', () => <Icon icon="flower_astro" />)
  .add('scheduler', () => <Icon icon="scheduler" />)
  .add('stars', () => <Icon icon="stars" />)
  .add('webserver', () => <Icon icon="webserver" />)
  .add('satellite', () => <Icon icon="satellite" />)
  .add('worker', () => <Icon icon="worker" />)
