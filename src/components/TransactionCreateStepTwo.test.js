import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import { screen, render, getByPlaceholderText, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
test("on initial render disable, pay button is disabled", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "101" }} sender={{ id: "101" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});
// ARRANGE : rendering components ...
// ACT: user evnt -> typing, clicking, chekcing ...
// ASSERT:
test("if amount and note is enterd, pay button is enabled", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "101" }} sender={{ id: "101" }} />);
  // const amountField = getByPlaceholderText(/Amount/i);
  // const noteField = getByPlaceholderText(/Add a note/i);
  // fireEvent.change(amountField, {target: {value: }})
  userEvent.type(screen.getByPlaceholderText(/amount/i), "666");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "chekced");

  expect(await screen.findAllByPlaceholderText(/Amount/i))
});
