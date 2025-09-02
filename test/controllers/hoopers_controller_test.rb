require "test_helper"

class HoopersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hoopers_index_url
    assert_response :success
  end

  test "should get new" do
    get hoopers_new_url
    assert_response :success
  end

  test "should get create" do
    get hoopers_create_url
    assert_response :success
  end

  test "should get show" do
    get hoopers_show_url
    assert_response :success
  end

  test "should get edit" do
    get hoopers_edit_url
    assert_response :success
  end

  test "should get update" do
    get hoopers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get hoopers_destroy_url
    assert_response :success
  end
end
