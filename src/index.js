import { run } from "./app/app";
import { Alert } from "./app/services/alert";
import { Component } from "./app/services/component";
import "./main.css";

const alertService = new Alert();
const componentService = new Component();

run(alertService, componentService);
