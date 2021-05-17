import { run } from "./app/app";
import { Alert } from "./app/services/alert";
import { Component } from "./app/services/component";
import "./main.scss";

const alertService = new Alert();
const componentService = new Component();

run(alertService, componentService);
