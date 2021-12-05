import SignUp from "./SignUp.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
it("has sign up header text", () => {
  render(SignUp);
  const header = screen.queryByRole("heading", { name: "Sign up" });
  expect(header).toBeInTheDocument();
});
