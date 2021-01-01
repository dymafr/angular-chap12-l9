import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  get hobbies() {
    return this.form.get("hobbies") as FormArray;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      nom: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      hobbies: new FormArray([]),
      password: new FormControl("")
    });
  }

  addHobby() {
    this.hobbies.push(new FormControl(""));
  }

  deleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }
}
