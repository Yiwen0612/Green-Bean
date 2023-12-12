/**
 * @name: business
 * @author: Zhongxu(Donald)
 * @date: 12/12/2023 14:27
 * @description：business
 */
import http from '@/lib/http';

export const businessApi = {
  getProducts(){
    return http.get(`/admin/product`)
  }
}
