class CreateCalendars < ActiveRecord::Migration[6.0]
  def up
    create_table :calendars do |t|
      t.string :name
      t.timestamps
    end
  end

  def down
    drop_table :calendars
  end
end
