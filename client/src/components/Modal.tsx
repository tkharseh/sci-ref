import React from "react";
import { ContextModalProps } from "@mantine/modals";
import { Text, Button, Checkbox, Select } from "@mantine/core";
import { CheckboxGroup } from "@mantine/core/lib/Checkbox/CheckboxGroup/CheckboxGroup";

const Modal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => {
  const entries = ["Title", "Year", "Journal", "Volume", "Page Numbers", "DOI"];
  return (
    <>
      <div></div>
      <div className="grid gap-9">
        <div className="grid gap-2">
          <h1>Author</h1>
          <Checkbox label={"Italicize"} />
          <Checkbox label={"Make Bold"} />
          <Checkbox label={"Underline"} />
          <Select
            label="Choose your format"
            placeholder="Pick one"
            data={[
              {
                value: "option1",
                label: "e.g. Mary Jane, Billy Bob, Frank Joe Smith",
              },
              { value: "option2", label: "e.g. Jane M, Bob B, Smith FJ" },
              { value: "option3", label: "e.g. Jane, M., Bob, B., Smith F. J." },
              { value: "option4", label: "e.g. Jane, Mary et al." },
            ]}
          />
        </div>
        {entries.map((entry) => {
          return (
            <div className="grid gap-2">
              <h1>{entry}</h1>
              <Checkbox label={"Italicize"} />
              <Checkbox label={"Make Bold"} />
              <Checkbox label={"Underline"} />
            </div>
          );
        })}
      </div>
      <Button
        fullWidth
        mt="md"
        onClick={() => context.closeModal(id)}
        className="bg-blue-500 mt-10"
      >
        Submit
      </Button>
    </>
  );
};

export default Modal;
