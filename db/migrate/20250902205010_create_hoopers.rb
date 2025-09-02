class CreateHoopers < ActiveRecord::Migration[7.2]
  def change
    create_table :hoopers do |t|
      t.string :name
      t.string :position
      t.string :team
      t.float :career_ppg
      t.integer :reg_mvps
      t.integer :finals_mvps
      t.integer :finals_wins

      t.timestamps
    end
  end
end
