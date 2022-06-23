import axios from "axios";

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get("http://localhost:8080/api/hello/getHelloWorld");
  }

  executeHelloWorldBeanService() {
    return axios.get("http://localhost:8080/api/hello/getHelloWorldBean");
  }

  executeHelloWorldBeanPathVarService(name) {
    return axios.get(`http://localhost:8080/api/hello/getHelloWorldBeanPathVar/${name}`);
  }
}

export default new HelloWorldService();
