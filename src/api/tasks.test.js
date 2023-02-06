import axios from "axios";
import {fetchTasks} from "./tasks";

jest.mock('axios');
describe('tasks api', function () {
  test('should return tasks data when fetchTasks called', async () => {
    // arrange
    const mockData = [];
    axios.get.mockResolvedValue({
      data: mockData,
    });

    // act
    const result = await fetchTasks();

    // assert
    expect(result).toEqual(mockData);
  });
});