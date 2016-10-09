class ChangeNoteTitleColumn < ActiveRecord::Migration
  def change
    change_column_null :notes, :title, true
  end
end
