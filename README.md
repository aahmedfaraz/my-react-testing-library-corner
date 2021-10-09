# My Practice with @testing-library/react

#### **Docs** 📚

- `Official Docs: React Testing Library` ➡️ [Click Here](https://testing-library.com/docs/react-testing-library/intro)
- `Blog: How to use React Testing Library Tutorial` ➡️ [Click Here](https://www.robinwieruch.de/react-testing-library)

#### **YouTube** 📺

- `Traversy Media: React Testing Crash Course` ➡️ [Click Here](https://www.youtube.com/watch?v=OVNjsIto9xM)
- `The Net Ninja: React Testing Library Tutorial` ➡️ [Click Here](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)

# Sample test in @testing-library/react

```js
// File name extension must be .test.js or .spec.js / .test.tsx or .spec.tsx (for Typescript)
import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import MyComponent from "./path/to/MyComponent";

describe("My Component", () => {
  beforeEach(() => render(<MyComponent />));
  afterEach(cleanup);

  // Test 1
  test("should ...", () => {
    const element = screen.getByTestId("element-in-my-component");
    expect(element).toBeInTheDocument();
  });
});
```

To run tests, run commands either with npm or yarn

```js
// with npm
npm test

// with yarn
yarn test
```

# Queries

1. `ByLabelText find by label or aria-label text content`

- getByLabelText
- queryByLabelText
- getAllByLabelText
- queryAllByLabelText
- findByLabelText
- findAllByLabelText

2. `ByPlaceholderText find by input placeholder value`

- getByPlaceholderText
- queryByPlaceholderText
- getAllByPlaceholderText
- queryAllByPlaceholderText
- findByPlaceholderText
- findAllByPlaceholderText

3. `ByText find by element text content`

- getByText
- queryByText
- getAllByText
- queryAllByText
- findByText
- findAllByText

4. `ByDisplayValue find by form element current value`

- getByDisplayValue
- queryByDisplayValue
- getAllByDisplayValue
- queryAllByDisplayValue
- findByDisplayValue
- findAllByDisplayValue

5. `ByAltText find by img alt attribute`

- getByAltText
- queryByAltText
- getAllByAltText
- queryAllByAltText
- findByAltText
- findAllByAltText

6. `ByTitle find by title attribute or svg title tag`

- getByTitle
- queryByTitle
- getAllByTitle
- queryAllByTitle
- findByTitle
- findAllByTitle

7. `ByRole find by aria role`

- getByRole
- queryByRole
- getAllByRole
- queryAllByRole
- findByRole
- findAllByRole

8. `ByTestId find by data-testid attribute`

- getByTestId
- queryByTestId
- getAllByTestId
- queryAllByTestId
- findByTestId
- findAllByTestId

Further details about queries in @testing-library/react and how to use them.
Visit [https://testing-library.com/docs/react-testing-library/cheatsheet#queries](https://testing-library.com/docs/react-testing-library/cheatsheet#queries).

# Events

[See all supported events](https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js)

# HTML Element Roles

- [Requirements for use of ARIA attributes in place of equivalent HTML attributes.](https://www.w3.org/TR/html-aria/#docconformance-attr)
- [Full Documentation, ARIA in HTML - W3C Proposed Recommendation](https://www.w3.org/TR/html-aria/#docconformance)

# Tips

- I have found if I was using ❌`.innerText` to update any text of an element, it was not accessible by 👉`.toHaveTextContent` of **React Testing Library**, **SOLUTION** is rather than ❌`.innerText` use ✔️`.innerHTML` to update text of any element, then it will work perfectly.

# MATERIAL UI with Typescript

- [Some Documentation about MUI with Tyoescript.](https://mui.com/guides/typescript/)
- [Usage of component prop](https://mui.com/guides/composition/#with-typescript), this is very helpful when using MUI with Typescript.

### When using MUI with TSX

- `MUI is working fine` straight after installation without any **config setting** or installation of **types package** or changing root node using **component** prop. It working with `Typescript` and `@testing-library/react`
- Installed using

```powershell
yarn add @mui/material @emotion/react @emotion/styled
```

- And MUI Icons using

```powershell
yarn add @mui/icons-material
```

- Still I am adding the configs in `tsconfig.json` mentioned in official site of MUI. i.e.

```json
{
  "compilerOptions": {
    "lib": ["es6", "dom"],
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true
  }
}
```

- According to MUI official site, To get the best type experience with the types we recommend setting `"strict": true` in `tsconfig.json` .

- READ about above two points in details, [Here](https://mui.com/guides/typescript/);

# Some Experiments for my concept of Material-UI with React-Testing-Library

```tsx
// Filename MaterialUIForm.tsx
import React from "react";

import { Button, IconButton, Icon } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
const MaterialUIForm = () => {
  return (
    <div>
      {/* SAMPLE (TESTING) */}
      <Button
        data-testid='mui-button'
        variant='outlined'
        color='secondary'
        onClick={() => {
          const text1: any = document.getElementById("text1");
          text1.innerHTML = "Faraz";
        }}
      >
        Ahmed
      </Button>
      <p id='text1' data-testid='text1'>
        Ahmed
      </p>
      <Icon>done</Icon>
      <Icon>info</Icon>
      <Icon>check_circle</Icon>
      <br />
      <IconButton
        data-testid='google-icon-button'
        onClick={() => {
          const text2: any = document.getElementById("text2");
          text2.innerHTML = "Faraz2";
        }}
      >
        <Icon data-testid='google-home-icon'>home</Icon>
      </IconButton>
      <p id='text2' data-testid='text2'>
        Ahmed2
      </p>
      <br />
      <IconButton
        data-testid='mui-icon-button'
        onClick={() => {
          const text3: any = document.getElementById("text3");
          text3.innerHTML = "Faraz3";
        }}
      >
        <InfoOutlined data-testid='mui-info-icon' />
      </IconButton>
      <p id='text3' data-testid='text3'>
        Ahmed3
      </p>
    </div>
  );
};

export default MaterialUIForm;
```

```tsx
// Filename MaterialUIForm.test.tsx
import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import MaterialUIForm from "../MaterialUIForm";

describe("MaterialUIForm Component", () => {
  beforeEach(() => render(<MaterialUIForm />));
  afterEach(cleanup);

  test("should render MUI Button", () => {
    const muiButton = screen.getByTestId("mui-button");
    expect(muiButton).toBeInTheDocument();
    expect(muiButton).toHaveTextContent("Ahmed");
  });

  test("should have MUI Button working properly", () => {
    const muiButton = screen.getByTestId("mui-button");
    const text1 = screen.getByTestId("text1");

    expect(text1).toHaveTextContent("Ahmed");
    fireEvent.click(muiButton);
    expect(text1).toHaveTextContent("Faraz");
  });

  test("should have Google Icon button working properly when click on IconButton", () => {
    const iconButton = screen.getByTestId("google-icon-button");
    const text2 = screen.getByTestId("text2");

    expect(iconButton).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text2).toHaveTextContent("Ahmed2");

    fireEvent.click(iconButton);
    expect(text2).toHaveTextContent("Faraz2");
  });

  test("should have Google Icon button working properly when click on icon only", () => {
    const icon = screen.getByTestId("google-home-icon");
    const text2 = screen.getByTestId("text2");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent("home");
    expect(text2).toBeInTheDocument();
    expect(text2).toHaveTextContent("Ahmed2");

    fireEvent.click(icon);
    expect(text2).toHaveTextContent("Faraz2");
  });

  test("should have MUI Icon button working properly when click on IconButton", () => {
    const iconButton = screen.getByTestId("mui-icon-button");
    const text3 = screen.getByTestId("text3");

    expect(iconButton).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(text3).toHaveTextContent("Ahmed3");

    fireEvent.click(iconButton);
    expect(text3).toHaveTextContent("Faraz3");
  });

  test("should have MUI Icon button working properly when click on icon only", () => {
    const icon = screen.getByTestId("mui-info-icon");
    const text3 = screen.getByTestId("text3");

    expect(icon).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(text3).toHaveTextContent("Ahmed3");

    fireEvent.click(icon);
    expect(text3).toHaveTextContent("Faraz3");
  });
});
```

```powershell
# Result
PASS  src/components/material-ui/tests/MaterialUIForm.test.tsx (12.35 s)
  MaterialUIForm Component
    √ should render MUI Button (88 ms)
    √ should have MUI Button working properly (26 ms)
    √ should have Google Icon button working properly when click on IconButton (14 ms)
    √ should have Google Icon button working properly when click on icon only (14 ms)
    √ should have MUI Icon button working properly when click on IconButton (19 ms)
    √ should have MUI Icon button working properly when click on icon only (15 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        13.802 s
Ran all test suites matching /MaterialUIForm/i.
```
