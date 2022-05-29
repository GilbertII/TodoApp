import axios from "axios";

class HelloWorldService {
  executeHelloWorldService() {
    // console.log("Executed service");

    return axios.get("http://localhost:8080/api/hello/getHelloWorld");
  }
  executeHelloWorldBeanService() {
    // console.log("Executed service");

    return axios.get("http://localhost:8080/api/hello/getHelloWorldBean");
  }

  executeHelloWorldBeanPathVarService(name) {
    // console.log("Executed service");

    return axios.get(`http://localhost:8080/api/hello/getHelloWorldBeanPathVar/${name}`);
  }
}

export default new HelloWorldService();
