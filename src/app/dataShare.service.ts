import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * This service is a wrapper for communicating between two different
 * component applications. This class uses Jquery custom event trigger as
 * it works beyond scope.
 *
 * @export
 * @class DataShareService
 */
@Injectable()
export class DataShareService {
  private events = new Subject<any>();
  subscribedEvent = this.events.asObservable();
  /**
   * Creates an instance of DataShareService. Also added the jquery on event for initializing
   *  the custom event.
   * @memberof DataShareService
   */
  constructor() {}

  /**
   * This is for triggering the data from the component.
   *
   * @param {string} source
   * @param {string} destination
   * @param {*} data
   * @memberof DataShareService
   */
  sendMessage(source: string, destination: string, data: any) {
    this.events.next({
      source: source,
      destination: destination,
      content: '' + JSON.stringify(data)
    });
  }
}
