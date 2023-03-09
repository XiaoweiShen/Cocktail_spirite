require "test_helper"

class GlassesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get glasses_index_url
    assert_response :success
  end

  test "should get show" do
    get glasses_show_url
    assert_response :success
  end
end
