import { Injectable } from '@nestjs/common';
import { NewEnforcerRequest } from 'src/casbin/interfaces/proto/NewEnforcerRequest';
import { CasbinClient } from 'src/casbin/interfaces/proto/Casbin';


@Injectable()
export class CasbinServiceClient  {
  private readonly client: CasbinClient;

/*   newEnforcer(request: NewEnforcerRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.newEnforcer(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  } */
}
