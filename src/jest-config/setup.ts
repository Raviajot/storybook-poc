import 'jest-preset-angular';
import './global-mocks';

Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });
