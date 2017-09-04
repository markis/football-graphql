import { buildSchema } from 'graphql';
export const schema = buildSchema(`
type Team {
  id: ID
  name: String
  logo: String
  roster: [Player]
}

type Player { 
  id: String
  created_at: String
  updated_at: String
  active: Boolean
  bats: String
  birth_date: String
  captain: String
  city: String
  country: String
  draft_overall_pick: Float
  draft_round: Float
  draft_season: String
  draft_team_name: String
  first_name: String
  handedness: String
  height: Float
  high_school: String
  humanized_salary: String
  last_name: String
  mlbam_id: Float
  name: String
  nickname: String
  position: PlayerPosition
  position_abbreviation: String
  position_name: String
  pro_debut: String
  salary: Float
  salary_currency: String
  school: String
  slug: String
  sport: String
  state: String
  stats: PlayerStats
  uniform_number: String
  unit_of_height: String
  unit_of_weight: String
  weight: Float
  years_of_experience: Float
  league_id: String
  playing_position_id: String
  team_id: String
}

type PlayerPosition {
  id: String
  created_at: String
  updated_at: String
  abbreviation: String
  description: String
  formation: String
  name: String
  league_id: String
}

type PlayerStats {
  interval_type: String
  statistics_on: String
  games_played: Float
  games_started: Float
  defense_assisted_tackles: Float
  defense_blocked_kicks: Float
  defense_combined_tackles: Float
  defense_forced_fumbles: Float
  defense_fumbles_recovered: Float
  defense_fumble_touchdowns: Float
  defense_interceptions: Float
  defense_interceptions_longest: Float
  defense_interceptions_touchdowns: Float
  defense_interceptions_yards: Float
  defense_misc_assists: Float
  defense_misc_combined_tackles: Float
  defense_misc_forced_fumbles: Float
  defense_misc_fumbles_recovered: Float
  defense_misc_tackles: Float
  defense_passes_defensed: Float
  defense_quarterback_hit: Float
  defense_sacks: Float
  defense_sack_yards: Float
  defense_safeties: Float
  defense_safeties_1pt: Float
  defense_special_teams_assists: Float
  defense_special_teams_combined_tacles: Float
  defense_special_teams_force_fumbles: Float
  defense_special_teams_fumbles_recovered: Float
  defense_special_teams_tackle: Float
  defense_tackles: Float
  defense_tackles_for_loss: Float
  extra_point_attempts: Float
  extra_points_blocked: Float
  extra_point_made: Float
  extra_point_pct: Float
  field_goal_attempts: Float
  field_goal_attempts_19: Float
  field_goal_attempts_29: Float
  field_goal_attempts_39: Float
  field_goal_attempts_49: Float
  field_goal_attempts_50: Float
  field_goal_longest_yards: Float
  field_goal_made: Float
  field_goal_made_19: Float
  field_goal_made_29: Float
  field_goal_made_39: Float
  field_goal_made_49: Float
  field_goal_made_50: Float
  field_goal_pct: Float
  first_downs: Float
  first_down_passes: Float
  first_down_penalties: Float
  first_down_rushes: Float
  fourth_down_attempts: Float
  fourth_down_conversions: Float
  fourth_down_passes: Float
  fourth_down_pct: Float
  fourth_down_penalties: Float
  fourth_down_rushes: Float
  fumbles_forced: Float
  fumbles: Float
  fumbles_lost: Float
  fumbles_out_of_bounds: Float
  fumbles_opponent_recovered: Float
  fumbles_opponent_recovered_touchdowns: Float
  fumbles_opponent_recovered_yards: Float
  fumbles_own_recovered: Float
  fumbles_own_recovered_touchdowns: Float
  fumbles_own_recovered_yards: Float
  goal_to_go_attempts: Float
  goal_to_go_pct: Float
  goal_to_go_touchdowns: Float
  kick_return_avg_yards: Float
  kick_return_fair_catches: Float
  kick_return_longest_yards: Float
  kick_return_returns: Float
  kick_return_touchdowns: Float
  kick_return_yards: Float
  kick_return_yards_10_plus: Float
  kick_return_yards_20_plus: Float
  kick_return_yards_30_plus: Float
  kick_return_yards_40_plus: Float
  kick_return_yards_50_plus: Float
  kickoff_avg: Float
  kickoff_avg_return_yards: Float
  kickoff_endzone: Float
  kickoff_inside_20: Float
  kickoff_inside_20_pct: Float
  kickoff_kicks: Float
  kickoff_longest_yards: Float
  kickoff_net_avg_yards: Float
  kickoff_net_yards: Float
  kickoff_returns: Float
  kickoff_return_yards: Float
  kickoff_touchbacks: Float
  kickoff_touchback_pct: Float
  kickoff_yards: Float
  pass_attempts: Float
  pass_avg_yards: Float
  pass_completions: Float
  pass_completion_avg_yards: Float
  pass_completion_pct: Float
  pass_first_downs: Float
  pass_interceptions: Float
  pass_interceptions_pct: Float
  pass_interceptions_touchdowns: Float
  pass_longest_yards: Float
  passer_rating: Float
  pass_red_zone_attempts: Float
  pass_safeties: Float
  pass_sacked: Float
  pass_sacked_yards: Float
  pass_touchdowns: Float
  pass_touchdown_pct: Float
  pass_yards: Float
  pass_yards_10_plus: Float
  pass_yards_20_plus: Float
  pass_yards_30_plus: Float
  pass_yards_40_plus: Float
  pass_yards_50_plus: Float
  penalty_first_downs: Float
  penalties: Float
  penalty_yards: Float
  punt_return_avg_yards: Float
  punt_return_fair_catches: Float
  punt_return_longest_yards: Float
  punt_return_returns: Float
  punt_return_touchdowns: Float
  punt_return_yards: Float
  punt_return_yards_10_plus: Float
  punt_return_yards_20_plus: Float
  punt_return_yards_30_plus: Float
  punt_return_yards_40_plus: Float
  punt_return_yards_50_plus: Float
  punts_avg_yards: Float
  punts_avg_return_yards: Float
  punts_blocked: Float
  punts_inside_20: Float
  punts_inside_20_pct: Float
  punts_longest_yards: Float
  punts_net_avg_yards: Float
  punts_net_yards: Float
  punts: Float
  punt_returns: Float
  punts_return_yards: Float
  punts_touchbacks: Float
  punts_touchbacks_pct: Float
  punts_yards: Float
  reception_avg_yards: Float
  reception_first_downs: Float
  reception_fumbles: Float
  reception_longest_yards: Float
  receptions: Float
  reception_red_zone_targets: Float
  reception_targets: Float
  reception_touchdowns: Float
  reception_yac: Float
  reception_yards: Float
  reception_yards_10_plus: Float
  reception_yards_20_plus: Float
  reception_yards_30_plus: Float
  reception_yards_40_plus: Float
  reception_yards_50_plus: Float
  red_zone_attempts: Float
  red_zone_pct: Float
  red_zone_touchdowns: Float
  rush_attempts: Float
  rush_avg: Float
  rush_first_downs: Float
  rush_first_downs_pct: Float
  rush_fumbles: Float
  rush_longest: Float
  rush_red_zone_attempts: Float
  rush_safeties: Float
  rush_touchdowns: Float
  rush_yards: Float
  rush_yards_10_plus: Float
  rush_yards_20_plus: Float
  rush_yards_30_plus: Float
  rush_yards_40_plus: Float
  rush_yards_50_plus: Float
  third_down_attempts: Float
  third_down_conversions: Float
  third_down_passes: Float
  third_down_pct: Float
  third_down_penalties: Float
  third_down_rushes: Float
  touchdown_field_goal_returns: Float
  touchdown_fumble_returns: Float
  touchdown_interceptions: Float
  touchdown_kickoff_returns: Float
  touchdown_other: Float
  touchdown_passes: Float
  touchdown_punt_returns: Float
  touchdown_rushes: Float
  two_point_conversion_attempts: Float
  two_point_conversion_failures: Float
  two_point_conversion_passes: Float
  two_point_conversion_receptions: Float
  two_point_conversion_rushes: Float
}

type Query {
  myteams: [Team]
  myroster(id: ID): [Player]
  player(first: String, last: String): Player
  stats(first: String, last: String): PlayerStats
}
`);