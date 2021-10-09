# My Practice with @testing-library/react

#### **Docs** 📚

- `Official Docs: React Testing Library` ➡️ [Click Here](https://testing-library.com/docs/react-testing-library/intro)
- `Blog: How to use React Testing Library Tutorial` ➡️ [Click Here](https://www.robinwieruch.de/react-testing-library)

#### **YouTube** 📺

- `Traversy Media: React Testing Crash Course` ➡️ [Click Here](https://www.youtube.com/watch?v=OVNjsIto9xM)
- `The Net Ninja: React Testing Library Tutorial` ➡️ [Click Here](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)

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
