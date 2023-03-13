require "test_helper"

class DrinkIngredientsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get drink_ingredients_index_url
    assert_response :success
  end

  test "should get show" do
    get drink_ingredients_show_url
    assert_response :success
  end
end
