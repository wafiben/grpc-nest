import { Inject, Injectable } from '@nestjs/common';
import { NewEnforcerRequest } from 'src/casbin/interfaces/proto/NewEnforcerRequest';
import { CasbinClient } from 'src/casbin/interfaces/proto/Casbin';
import { Observable } from 'rxjs';

@Injectable()
export class CasbinServiceClient {
  private readonly client: CasbinClient;
  casbinClient: CasbinClient;

  constructor(@Inject('CASBIN_PACKAGE') client: CasbinClient) {
    this.casbinClient = client;
  }
  
  getAllSubjects(): Observable<any> {
    const request = {};

    return new Observable((observer) => {
      this.casbinClient.getAllNamedSubjects(request, (err, response) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(response.toObject());
          observer.complete();
        }
      });
    });
  }
}
