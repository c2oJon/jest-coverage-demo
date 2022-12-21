import { mock } from 'jest-mock-extended';
import { timeTravel } from './timeMachineGPT';
import { TimeMachine, TimeMachineDestination } from './types';

it('calculates speed percentage', () => {
  const machineMock = mock<TimeMachine>();
  machineMock.destinations = [mock<TimeMachineDestination>()];
  const destinationMock = mock<TimeMachineDestination>();

  expect(() => timeTravel(machineMock, destinationMock)).toThrow();
});
