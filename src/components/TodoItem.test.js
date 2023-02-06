import {render} from "@testing-library/react";
import {TodoItem} from "./TodoItem";

describe('TodoItem', function () {
  test('should render todo item checkbox and name', () => {
    const mockTask = {
      id: 1,
      name: 'task 01'
    };
    render(<TodoItem task={mockTask}/>)

    expect(screen.getByLabelText(mockTask.name)).toHaveAttribute(
      'type',
      'checkbox'
    );
  });
});