Search.setIndex({docnames:["actions/index","bibliography/index","dynamics/index","dynamics/road/lane","dynamics/road/regulation","dynamics/road/road","dynamics/vehicle/behavior","dynamics/vehicle/controller","dynamics/vehicle/kinematics","environments/highway","environments/index","environments/intersection","environments/merge","environments/parking","environments/roundabout","graphics/index","index","installation","make_your_own","observations/index","quickstart","rewards/index","user_guide"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["actions\\index.rst","bibliography\\index.rst","dynamics\\index.rst","dynamics\\road\\lane.rst","dynamics\\road\\regulation.rst","dynamics\\road\\road.rst","dynamics\\vehicle\\behavior.rst","dynamics\\vehicle\\controller.rst","dynamics\\vehicle\\kinematics.rst","environments\\highway.rst","environments\\index.rst","environments\\intersection.rst","environments\\merge.rst","environments\\parking.rst","environments\\roundabout.rst","graphics\\index.rst","index.rst","installation.rst","make_your_own.rst","observations\\index.rst","quickstart.rst","rewards\\index.rst","user_guide.rst"],objects:{"highway_env.envs.common":{"abstract":[18,0,0,"-"],action:[0,0,0,"module-0"],graphics:[15,0,0,"-"],observation:[19,0,0,"-"]},"highway_env.envs.common.abstract":{AbstractEnv:[18,1,1,""]},"highway_env.envs.common.abstract.AbstractEnv":{PERCEPTION_DISTANCE:[18,2,1,""],_automatic_rendering:[18,3,1,""],_cost:[18,3,1,""],_is_terminal:[18,3,1,""],_reward:[18,3,1,""],_simulate:[18,3,1,""],change_vehicles:[18,3,1,""],close:[18,3,1,""],default_config:[18,3,1,""],get_available_actions:[18,3,1,""],render:[18,3,1,""],reset:[18,3,1,""],seed:[18,3,1,""],simplify:[18,3,1,""],step:[18,3,1,""]},"highway_env.envs.common.action":{ActionType:[0,1,1,""],ContinuousAction:[0,1,1,""],DiscreteMetaAction:[0,1,1,""]},"highway_env.envs.common.action.ActionType":{act:[0,3,1,""],space:[0,3,1,""],vehicle_class:[0,3,1,""]},"highway_env.envs.common.action.ContinuousAction":{ACCELERATION_RANGE:[0,2,1,""],STEERING_RANGE:[0,2,1,""],act:[0,3,1,""],space:[0,3,1,""],vehicle_class:[0,3,1,""]},"highway_env.envs.common.action.DiscreteMetaAction":{ACTIONS_ALL:[0,2,1,""],ACTIONS_LAT:[0,2,1,""],ACTIONS_LONGI:[0,2,1,""],act:[0,3,1,""],space:[0,3,1,""],vehicle_class:[0,3,1,""]},"highway_env.envs.common.graphics":{EnvViewer:[15,1,1,""]},"highway_env.envs.common.graphics.EnvViewer":{close:[15,3,1,""],display:[15,3,1,""],get_image:[15,3,1,""],handle_events:[15,3,1,""],set_agent_action_sequence:[15,3,1,""],set_agent_display:[15,3,1,""],window_position:[15,3,1,""]},"highway_env.envs.common.observation":{GrayscaleObservation:[19,1,1,""],KinematicObservation:[19,1,1,""],KinematicsGoalObservation:[19,1,1,""],OccupancyGridObservation:[19,1,1,""]},"highway_env.envs.common.observation.GrayscaleObservation":{observe:[19,3,1,""],space:[19,3,1,""]},"highway_env.envs.common.observation.KinematicObservation":{normalize_obs:[19,3,1,""],observe:[19,3,1,""],space:[19,3,1,""]},"highway_env.envs.common.observation.KinematicsGoalObservation":{observe:[19,3,1,""],space:[19,3,1,""]},"highway_env.envs.common.observation.OccupancyGridObservation":{normalize:[19,3,1,""],observe:[19,3,1,""],space:[19,3,1,""]},"highway_env.envs.highway_env":{HighwayEnv:[9,1,1,""]},"highway_env.envs.highway_env.HighwayEnv":{HIGH_SPEED_REWARD:[9,2,1,""],LANE_CHANGE_REWARD:[9,2,1,""],RIGHT_LANE_REWARD:[9,2,1,""],default_config:[9,3,1,"id0"],reset:[9,3,1,""],step:[9,3,1,""]},"highway_env.envs.intersection_env":{IntersectionEnv:[11,1,1,""]},"highway_env.envs.intersection_env.IntersectionEnv":{default_config:[11,3,1,"id0"],reset:[11,3,1,""],step:[11,3,1,""]},"highway_env.envs.merge_env":{MergeEnv:[12,1,1,""]},"highway_env.envs.merge_env.MergeEnv":{default_config:[12,3,1,""],reset:[12,3,1,""]},"highway_env.envs.parking_env":{ParkingEnv:[13,1,1,""]},"highway_env.envs.parking_env.ParkingEnv":{compute_reward:[13,3,1,""],default_config:[13,3,1,"id0"],reset:[13,3,1,""],step:[13,3,1,""]},"highway_env.envs.roundabout_env":{RoundaboutEnv:[14,1,1,""]},"highway_env.envs.roundabout_env.RoundaboutEnv":{default_config:[14,3,1,"id0"],reset:[14,3,1,""],step:[14,3,1,""]},"highway_env.road":{graphics:[15,0,0,"-"],lane:[3,0,0,"-"],regulation:[4,0,0,"-"],road:[5,0,0,"-"]},"highway_env.road.graphics":{LaneGraphics:[15,1,1,""],RoadGraphics:[15,1,1,""],RoadObjectGraphics:[15,1,1,""],WorldSurface:[15,1,1,""]},"highway_env.road.graphics.LaneGraphics":{STRIPE_LENGTH:[15,2,1,""],STRIPE_SPACING:[15,2,1,""],STRIPE_WIDTH:[15,2,1,""],continuous_curve:[15,3,1,""],continuous_line:[15,3,1,""],display:[15,3,1,""],draw_stripes:[15,3,1,""],striped_line:[15,3,1,""]},"highway_env.road.graphics.RoadGraphics":{display:[15,3,1,""],display_road_objects:[15,3,1,""],display_traffic:[15,3,1,""]},"highway_env.road.graphics.RoadObjectGraphics":{blit_rotate:[15,3,1,""],display:[15,3,1,""]},"highway_env.road.graphics.WorldSurface":{handle_event:[15,3,1,""],move_display_window_to:[15,3,1,""],pix:[15,3,1,""],pos2pix:[15,3,1,""],vec2pix:[15,3,1,""]},"highway_env.road.lane":{AbstractLane:[3,1,1,""],CircularLane:[3,1,1,""],LineType:[3,1,1,""],SineLane:[3,1,1,""],StraightLane:[3,1,1,""]},"highway_env.road.lane.AbstractLane":{distance:[3,3,1,""],heading_at:[3,3,1,""],is_reachable_from:[3,3,1,""],local_coordinates:[3,3,1,""],metaclass__:[3,2,1,""],on_lane:[3,3,1,""],position:[3,3,1,""],width_at:[3,3,1,""]},"highway_env.road.lane.CircularLane":{heading_at:[3,3,1,""],local_coordinates:[3,3,1,""],position:[3,3,1,""],width_at:[3,3,1,""]},"highway_env.road.lane.SineLane":{heading_at:[3,3,1,""],local_coordinates:[3,3,1,""],position:[3,3,1,""]},"highway_env.road.lane.StraightLane":{heading_at:[3,3,1,""],local_coordinates:[3,3,1,""],position:[3,3,1,""],width_at:[3,3,1,""]},"highway_env.road.regulation":{RegulatedRoad:[4,1,1,""]},"highway_env.road.regulation.RegulatedRoad":{enforce_road_rules:[4,3,1,""],respect_priorities:[4,3,1,""],step:[4,3,1,""]},"highway_env.road.road":{Road:[5,1,1,""]},"highway_env.road.road.Road":{act:[5,3,1,""],dump:[5,3,1,""],get_log:[5,3,1,""],neighbour_vehicles:[5,3,1,""],step:[5,3,1,""]},"highway_env.vehicle":{behavior:[6,0,0,"-"],controller:[7,0,0,"-"],graphics:[15,0,0,"-"],kinematics:[8,0,0,"-"]},"highway_env.vehicle.behavior":{AggressiveVehicle:[6,1,1,""],DefensiveVehicle:[6,1,1,""],IDMVehicle:[6,1,1,""],LinearVehicle:[6,1,1,""]},"highway_env.vehicle.behavior.IDMVehicle":{ACC_MAX:[6,2,1,""],COMFORT_ACC_MAX:[6,2,1,""],COMFORT_ACC_MIN:[6,2,1,""],DELTA:[6,2,1,""],DISTANCE_WANTED:[6,2,1,""],TIME_WANTED:[6,2,1,""],acceleration:[6,3,1,""],act:[6,3,1,""],change_lane_policy:[6,3,1,""],create_from:[6,3,1,""],desired_gap:[6,3,1,""],maximum_speed:[6,3,1,""],mobil:[6,3,1,""],recover_from_stop:[6,3,1,""],step:[6,3,1,""]},"highway_env.vehicle.behavior.LinearVehicle":{acceleration:[6,3,1,""],act:[6,3,1,""],collect_data:[6,3,1,""],steering_control:[6,3,1,""],steering_features:[6,3,1,""]},"highway_env.vehicle.controller":{ControlledVehicle:[7,1,1,""],MDPVehicle:[7,1,1,""]},"highway_env.vehicle.controller.ControlledVehicle":{act:[7,3,1,""],create_from:[7,3,1,""],follow_road:[7,3,1,""],get_routes_at_intersection:[7,3,1,""],plan_route_to:[7,3,1,""],predict_trajectory_constant_speed:[7,3,1,""],set_route_at_intersection:[7,3,1,""],speed_control:[7,3,1,""],steering_control:[7,3,1,""],target_speed:[7,2,1,""]},"highway_env.vehicle.controller.MDPVehicle":{act:[7,3,1,""],index_to_speed:[7,3,1,""],predict_trajectory:[7,3,1,""],speed_to_index:[7,3,1,""],speed_to_index_default:[7,3,1,""]},"highway_env.vehicle.kinematics":{Vehicle:[8,1,1,""]},"highway_env.vehicle.kinematics.Vehicle":{COLLISIONS_ENABLED:[8,2,1,""],DEFAULT_SPEEDS:[8,2,1,""],LENGTH:[8,2,1,""],MAX_SPEED:[8,2,1,""],WIDTH:[8,2,1,""],act:[8,3,1,""],check_collision:[8,3,1,""],create_from:[8,3,1,""],create_random:[8,3,1,""],dump:[8,3,1,""],get_log:[8,3,1,""],lane_distance_to:[8,3,1,""],make_on_lane:[8,3,1,""],on_road:[8,3,1,""],step:[8,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method"},terms:{"00122269":19,"00497162":[],"01439495":[],"01454675":[],"01495":1,"01778064":19,"01792941":19,"025":19,"03380118":[],"03570125":[],"03736207":19,"04113941":19,"04583648":19,"06020216":19,"06294552":[],"065":19,"06681621":[],"075":19,"07787021":[],"07863175":19,"09546527":[],"09680516":19,"100":[11,13,19,20],"105":19,"1140":19,"12250":1,"150":[9,12,20],"1707":1,"172":19,"180":18,"1805":1,"1824":1,"1825378":[],"1911":1,"1999":1,"1e6":20,"1st":8,"2000":1,"2007":1,"2008":1,"2015":1,"2017":1,"20178044":19,"2018":16,"2019":[1,20],"222":19,"256":20,"25m":19,"2989":19,"2e5":20,"300":13,"3141":1,"35505281":[],"39607852":19,"480":15,"518":1,"51985796":[],"529":1,"533":1,"54714144":15,"58661158":19,"5870":19,"600":[9,11,12,13,14,20],"640":15,"675":19,"71197167":[],"7540":1,"76056088":19,"7853981633974483":0,"90721377":[],"94499881":19,"abstract":[3,18],"case":[4,5,19],"class":[0,3,4,5,6,7,8,9,11,12,13,14,15,18,19],"default":[0,6,7,8,15,18,19],"float":[0,3,4,5,6,7,8,9,11,13,14,15,18,19],"function":[18,21],"import":[0,2,18,19,20],"int":[0,3,5,6,7,8,9,11,14,15,18,19,20],"new":[6,7,8,18],"return":[0,3,4,5,6,7,8,9,11,12,13,14,15,18,21],"static":[4,15],"switch":7,"true":[0,3,6,8,9,11,12,13,14,18,19,20],"try":[4,6],"while":[0,8,9,12,14,18],But:11,For:[0,5,6,19,20],Its:15,MKS:[1,21],That:18,The:[0,1,2,3,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21],Then:0,There:2,These:[8,18,19],Use:[13,20],Using:[7,19],Will:18,__init__:18,_automatic_rend:18,_cost:18,_is_termin:18,_make_road:18,_reward:[18,21],_simul:18,_to:7,a_c:6,a_n:6,a_o:6,abbeel:1,abc:3,abcmeta:3,abl:[0,18],about:6,absolut:[11,19],abstractenv:[0,15,18,19],abstractlan:[3,5,8,15],acc_max:6,acceler:[0,6,7,8,13],acceleration_rang:0,access:[0,12,18,20],accident:18,accord:6,achiev:[11,13,18],achieved_go:13,act:[0,5,6,7,8],action:[5,6,7,8,9,11,12,13,14,15,16,18,20,22],action_dur:7,action_spac:[0,18],action_typ:[18,19,20],actions_al:0,actions_index:[19,20],actions_lat:0,actions_longi:0,actiontyp:0,actual:[0,5],add:[0,18],added:[11,18],address:21,adequ:21,advanc:1,affect:2,after:[6,20],against:21,agent:[0,9,11,12,13,15,16,18,21],agent_displai:15,aggressivevehicl:6,agre:11,alex:1,alia:3,all:[5,6,9,11,13,14,18,19],allow:[0,6,7,18],along:[7,8,15,19],also:[5,9,12,15,19,21],altch:1,altern:18,alwai:[0,15,19],amir:1,among:7,amplitud:3,anaconda:17,andr:1,andrea:1,andrei:1,andrychowicz:1,angl:[0,6,7,8,15],ani:[11,13,18,19,21],anoth:[5,8],ansgar:1,anticip:7,antonogl:1,api:22,appear:8,appli:[0,7],approach:[12,14],appropri:[13,21],approxim:6,apt:17,arbitr:4,arc:3,architectur:20,arcsin:7,area:15,aren:18,arn:1,around:[3,19],arrai:[6,15,19],arrow:0,artifici:20,arxiv:1,aspect:21,assign:4,associ:18,assum:[6,19],attent:[1,20],attribut:[4,20],author:16,automat:[0,7,14,18],autonom:[1,16],avail:[0,18,20],avoid:[6,9,11,12,14,19,21],awr:[1,20],axes:19,axi:19,base:[0,4,6,8,20],baselin:20,batch_siz:20,beatti:1,becaus:6,been:[18,21],befor:6,behav:[2,4],behavior:[2,4,9,11,12,14,18,20],behaviour:[6,9,11,13,14,15,18,21],behind:8,being:[6,8,21],bellemar:1,benefici:21,beta:8,between:[3,4,6,7,8,15,18,21],beyond:0,bibliographi:16,bibtex:16,bicycl:[1,8],bigint:18,bin:19,blit_rot:15,block:11,bob:1,bolt:16,bool:[0,3,4,5,6,9,11,13,14,15,18,19],both:[0,6],bound:21,boundari:18,box:0,brake:[6,8,21],brigitt:1,budget:18,buffer_s:20,calcul:8,call:[7,9,11,12,13,14,15,18,19],callabl:15,callback:[15,18],can:[0,5,6,7,9,11,12,13,14,15,16,18,19,20,21],canada:1,candid:6,captur:18,car:1,cascad:7,cast:8,caus:21,cell:19,center:[3,6,7,8,15],centering_posit:[9,11,12,13,14,15,20],central:[3,11],challeng:21,chang:[0,1,6,7,9,14,18,19,20],change_lane_polici:6,change_vehicl:18,channel:19,charl:1,check:[8,18],check_collis:8,choic:[18,21],choos:[7,21],chosen:[6,8,15],circl:3,circularlan:3,classmethod:[6,7,8,11,12,13,14,15,18],clip:[0,19],clockwis:3,close:[6,15,18],closest:7,cmap:19,coeffici:[6,21],colab:16,collect:[6,16,19],collect_data:6,collid:9,collis:[4,6,8,9,11,12,14,21,22],collision_penalti:21,collision_reward:[9,11,20],collisions_en:8,color:15,com:[15,16,17],combin:7,come:[0,11,19],comfort_acc_max:6,comfort_acc_min:6,command:[6,7,8],common:[0,15,18,19],complet:8,compos:[2,5,21],comput:[1,3,6,7,8,18],compute_reward:13,concaten:5,condit:[13,20],confer:1,config:[9,11,12,13,14,18,19,20],config_kei:18,configur:[0,15,16,21,22],conflict:4,congest:1,consid:[5,16,19],consist:[0,1],constant:[7,18,19],constraint:18,contain:[5,8,18],continu:[13,15,22],continuous_curv:15,continuous_lin:15,continuousact:[0,13],contribut:[11,16],control:[1,2,6,13,14,18,22],controlledvehicl:[6,7],convent:21,convers:[3,19],convert:[3,7,15],coordin:[3,5,15,19],copi:[6,7,8,18],core:[5,8,19],correl:18,correspond:[0,3,7,13,15,18,19],cos:[8,21],cos_h:[11,13,19],could:[11,21],cours:11,crash:8,creat:[6,7,8,15,20,22],create_from:[6,7,8],create_random:8,creation:20,credit:13,cross:20,cruis:[0,7],current:[5,7,8,18,19,21],curv:3,custom:16,customari:19,customis:[0,19],cut:6,d_0:6,daan:1,data:[5,6,19],datafram:[5,8,19],david:1,ddpg:20,deceler:6,decelr:0,decemb:1,decentr:11,decid:[5,6],decis:[1,6,9,11,13,14,16,18],dedic:15,deep:[1,21],default_config:[9,11,12,13,14,18],default_spe:8,defensivevehicl:6,defin:[0,5,9,11,12,13,14,15,18,19,20,21],define_spac:18,definit:0,delai:6,delta:[0,6,7,8],delta_:7,demi:1,demonstr:20,dens:[1,11],densiti:8,depend:[8,17,18],deriv:7,describ:[2,3,5,16,18,19],descript:[2,16,20],desir:[0,6,7,13,18,21],desired_gap:6,desired_go:13,destin:[7,11,21],detail:16,detect:[8,19],determin:4,determinist:1,dev:17,dharshan:1,dict:[6,7,8,9,11,12,13,14,18,19,20],dictat:6,dictionari:[5,18,19,20],did:11,differ:[6,19],dimens:15,direct:0,directli:[0,19,21],dirk:1,disabl:0,discret:[6,7,22],discretemetaact:[0,9,11,12,14,20],discretis:19,displai:[15,19],display_road_object:15,display_traff:15,distanc:[3,6,8,15,18,21],distance_w:6,distant:18,doe:6,doesn:[5,6,18],doi:1,done:[0,15,18,20],dot:[6,7,8],dqn:[19,20],draw:15,draw_strip:15,drawn:15,drive:[1,5,8,9,12,15,16,18,20,21],driver:6,dump:[5,8],durat:[7,9,11,14,20],dure:[6,15],dynam:[0,4,5,6,7,8,9,11,13,14,16,18,20,22],each:[0,4,5,7,9,11,15,19],earli:21,edg:[0,5],edouard:[1,16],effect:20,ego:[0,6,9,11,12,13,14,15,18,21],ego_vehicl:6,either:0,eleur:[16,17],els:7,emerg:21,empir:1,enabl:[0,8],enable_lane_chang:6,encod:19,encourag:21,end:[3,5,7,11,15,18],end_phas:3,enforc:4,enforce_road_rul:4,enough:6,ensur:[3,18],entiti:[4,5],entry_point:18,enumer:19,env:[0,9,11,12,13,14,15,17,18,19,20],environ:[0,2,9,11,12,13,14,15,16,19,22],envview:15,episod:[11,21],episode_reward:20,equal:18,equival:0,eras:7,errat:8,euclidean:21,evalu:20,even:[6,15],event:15,eventhandl:0,everi:[0,2,21],exampl:[16,18],except:19,execut:[0,6,9,11,13,14,18],exist:[6,7,8,18],expect:[11,19,21],experi:[1,20],expon:6,fail:11,fals:[0,3,4,5,9,11,12,13,14,15,19,20],fast:14,faster:0,feasibl:1,featur:[6,11,13,21],features_rang:[11,19],fewer:19,ffmpeg:17,fidjeland:1,field:[18,19],figsiz:19,figur:11,file:22,filip:1,fill:19,find:[4,5,7],fine:11,first:[4,15,18,19],fix:[18,19],flag:15,flat:19,flatten:11,florent:1,flow:14,fluid:1,focu:21,follow:[0,1,5,6,7,14,15,18],follow_road:7,fong:1,forbid:21,forbidden:3,forward:[7,8,15],found:[5,21],frac:[6,7,8,21],frame:[3,5,8,18,19],fran:1,free:18,freeli:18,frenet:3,frequenc:[6,15,18],from:[3,5,6,7,8,18,19,20,21],front:[6,7,8,21],front_vehicl:6,full:[0,6,9],futur:[7,20],gain:[6,7],gamma:20,gap:6,gather:16,gcc:17,gener:[1,18,21],geometri:[3,5,18],georg:1,geq:6,get:[3,7,16,17,18,19],get_available_act:[0,18],get_cmap:19,get_imag:15,get_log:[5,8],get_routes_at_intersect:7,git:17,github:[16,17],give:[4,5,18,19],given:[3,5,6,7,8,13,15,18],global:3,goal:[13,20,22],goal_selection_strategi:20,going:[3,5,6],good:11,googl:16,grai:19,graph:5,graphic:[16,17,22],grave:1,graviti:8,grayscal:22,grayscaleobserv:19,grid:22,grid_siz:19,grid_step:19,guid:16,gym:[0,9,11,12,13,14,15,18,19,20],handl:[14,15],handle_ev:15,handler:7,happen:11,hard:11,has:[14,17,18,19,21],hassabi:1,have:[5,6,13,18,21],head:[3,6,8,13],heading_at:3,helb:1,helen:1,henneck:1,her:20,her_sac_highwai:20,here:[18,20],high:[7,9,12,13],high_speed_reward:9,higher:6,highwai:[0,10,12,15,17,19,20],highway_env:[0,3,4,5,6,7,8,9,11,12,13,14,15,18,19,20],highwayenv:9,hindsight:[1,20],hm08:[1,20],horizon:19,hot:19,how:[0,2,6,20],howev:[4,21],howpublish:16,hren:1,http:[15,16,17],human:[1,18],hyperparam:20,idea:13,ideal:11,identifi:5,idl:[0,19,20],idm:6,idmvehicl:[6,9,12,14,18,20],ieee:1,ignor:0,imag:[15,18,22],image1:17,implement:[0,3,6,7,9,11,12,13,14,15,18,20],impos:6,imshow:[19,20],incent:6,incom:12,incoming_vehicle_destin:14,increas:6,index:[0,5,6,7,8],index_to_spe:7,induc:6,inevit:6,info:[9,11,13,14,18,20],inform:[1,13],infrastructur:5,infti:19,inherit:18,initi:[8,9,11,12,13,14,15,18],initial_spac:[9,20],initial_vehicle_count:11,inlin:[19,20],input:[7,8,15],insid:21,instal:[15,16],instanc:[0,5,19],instead:21,integ:5,integr:8,intellig:[1,6],interdisciplinari:1,intermedi:18,intern:8,intersect:[0,4,5,7,10,20],intersection_env:11,intersectionenv:11,interv:0,invari:21,invert:7,involv:18,ioanni:1,is_conflict_poss:4,is_reachable_from:3,is_success:20,its:[0,3,5,6,7,8,14],itself:17,jam:6,jean:1,joel:1,jojo:13,jona:1,josh:1,journal:16,junction:12,k_p:7,kavukcuoglu:1,keep:[11,21],kei:[0,15,19],kest:1,kinemat:[0,1,2,4,5,6,7,9,11,20,22],kinematicobserv:19,kinematicsgo:13,kinematicsgoalobserv:19,king:1,known:3,korai:1,kp_a:7,kth07:[1,6],kumaran:1,kurtosi:13,kwarg:[0,19],lab:5,label:0,lane:[0,1,2,4,5,6,7,8,9,14,15,18,19,20],lane_change_max_braking_impos:6,lane_change_min_acc_gain:6,lane_change_reward:9,lane_distance_to:8,lane_index:[5,6,8],lane_left:0,lane_right:0,lanegraph:15,laneindex:5,lanes_count:[9,20],last:[8,18,19],lat:[3,7,15],later:[0,3,11,15],latest:16,layer:[0,20],lead:[6,21],learn:[1,20,21],learning_r:20,lectur:1,left:[6,7,15],legg:1,length:[8,15],leurent:[1,16],level:[0,1,7],libavcodec:17,libavformat:17,libfreetype6:17,libportmidi:17,librari:20,libsdl1:17,libsdl:17,libsmpeg:17,libswscal:17,light:11,like:19,line:[3,7,15,18],line_typ:3,linear:[6,7],linearli:9,linearvehicl:6,linetyp:3,list:[0,2,3,4,5,6,7,15,18,19,20],lm19:[1,20],load:[18,20],local:[3,5,15,17],local_coordin:3,locat:[8,15],log:[5,8],longi:3,longitudin:[0,3,8,11,14,15],look:[5,19],lookahead:7,low:[0,7],lower:[6,9,18],machin:1,mai:[6,19,21],main:[3,12,18],maintain:[6,12],make:[0,1,9,11,12,13,14,15,16,19,22],make_on_lan:8,maneuv:6,mani:15,manual:[17,22],manual_control:[0,20],map:[0,9],marc:1,marcin:1,margin:3,martin:1,master:17,match:19,matplotlib:[19,20],matter:11,max:21,max_spe:8,maxim:[6,18],maximum:[0,6,8,18,21],maximum_spe:6,mcgrew:1,mdp:18,mdpvehicl:7,meant:18,mechan:0,mercat:1,merg:[10,20],merge_env:12,mergeenv:12,meta:22,metaclass__:3,method:[0,3,4,6,7,8,18,21],metric:[8,18],microscop:1,might:0,min:21,minim:[6,18],minimum:[0,6,21],misc:16,mixer1:17,mlppolici:20,mnih:1,mobil:[1,6],mode:[18,20],model:[1,2,6,7,8,18,20],modifi:[8,18],modul:[0,19],monitor:18,montreal:1,more:[6,9,11,12,13,14,18],most:[0,4,9,22],move:[2,8,15],move_display_window_to:15,mtrand:[4,5],multilan:9,multipl:18,munir:13,muno:1,must:[0,5,13,15,17,18,20,21],n_sampled_go:20,name:0,narrow:21,natur:[1,19],ncol:19,ndarrai:[0,3,6,7,8,9,11,12,13,14,15,18,19],nearbi:[6,19],need:18,neg:21,negoti:[11,12],neighbour:[5,8,9],neighbour_vehicl:5,network:[4,5,7,18],neural:1,neurip:1,next:[7,9,11,13,14,18],node:[5,7],non:[6,7],none:[0,3,4,5,6,7,8,9,11,12,13,14,15,18,19],norm:[13,21],normal:[13,19,21],normalactionnois:20,normalize_ob:19,normalize_reward:11,note:[1,18,21],notebook:20,notic:6,novel:1,now:[6,12,18,19],np_random:[4,5],number:[8,15,18,19,20],numpi:[0,3,4,5,6,7,8,9,11,12,13,14,15,17,18,19,20],nut:16,object:[3,4,5,8,9,12,15],object_:15,obs:[18,19,20],observ:[0,1,9,11,12,13,14,16,18,20,21,22],observation_factori:19,observation_shap:19,observe_intent:[11,19],obstacl:4,obtain:5,occup:22,occupancygrid:19,occupancygridobserv:19,off:8,offroad_termin:20,offscreen:15,offscreen_rend:[9,12,13,14,19,20],offset:15,often:[11,18,21],ois:1,old:6,on_lan:3,on_road:8,onc:18,one:[6,7,8,15],ongo:18,onli:[0,6,8,18,21],opd:20,optim:[18,21],optimist:1,option:[0,3,5,16,18,19],order:[0,8,18,19,21],origin:15,origin_po:15,ostrovski:1,other:[4,6,7,8,9,11,13,14,18],other_valu:18,other_vehicles_typ:[9,12,14,20],output:6,over:19,overal:6,overload:[9,11,12,13,14,18,21],overrid:6,overridden:8,own:[6,11,16,22],packag:16,page:1,pair:18,paltchedandrean17:[1,8],panda:[5,8,19],param:[18,19],paramet:[0,3,4,5,6,7,8,9,11,13,14,15,18,19,21],parametr:[3,20],parametris:6,park:[10,20,21],parking_env:13,parkingenv:13,part:18,particular:21,pass:[14,18,19],path:18,penalti:[18,21],per:20,perception_dist:18,perform:[0,6,7,9,11,13,14,18,19],perspect:21,peter:1,petersen:1,phase:3,philip:1,physic:[1,2],piec:16,pieter:1,pilot:7,pip:17,pix:15,pixel:15,placehold:19,plan:[1,7,14,20],plan_route_to:7,plasma:1,pleas:16,plt:[19,20],point:0,polack:1,polici:[6,18,20,21],policy_frequ:[9,12,13,14,19,20],policy_kwarg:20,polit:6,popul:[9,18],pos2pix:15,pos:15,posit:[3,5,6,8,13,15],possibl:[6,14,21],pprint:20,practic:21,pre:0,preced:[5,6],predict:[4,7,11,19,20],predict_trajectori:7,predict_trajectory_constant_spe:7,prefer:21,prerequisit:16,presenc:11,present:18,preserv:18,principl:20,print:[19,20],prioriti:[3,4],problem:21,problemat:19,process:[0,1],profit:22,progress:21,project:[5,16,17,21],propag:8,properti:[0,6,7,8],proport:7,provid:[3,7,15,16,18],proxim:13,pseudorandom:18,psi:[7,8,21],psi_:7,psi_g:21,psi_l:7,psi_r:7,pub:5,publish:16,pull:18,pulsat:3,purpos:[11,16],pygam:[15,17,19],pyplot:[19,20],python3:17,python:17,quick:[16,20],quickli:21,quit:11,rachel:1,rad:[0,3,6,7],radiu:3,rai:1,rais:19,ramp:12,random:[4,5,8,18],randomli:8,randomst:[4,5],rang:[0,7,8,19,20,21],rate:7,rather:21,ratio:8,rbg:15,reach:[6,9,13],reachabl:[3,8],real:20,realist:[6,21],rear_vehicl:6,reason:[6,11],receiv:9,recommend:17,record:[1,18],record_histori:[4,5],recov:6,recover_from_stop:6,rectangl:[15,19],refer:[7,18],regist:22,regress:6,regul:2,regulatedroad:4,reinforc:[1,20,21],rel:[8,19],relat:1,releas:16,remov:18,render:[15,18,19,20],render_ag:[9,12,13,14,20],repeat:8,replac:21,replai:[1,20],repositori:16,repres:[5,8,15,19],reproduc:18,request:18,requir:[6,17,18,19],research:1,reset:[0,9,11,12,13,14,15,18,19,20],resolut:19,resolv:4,resp:6,respect:[0,6,7,15,21],respect_prior:4,respons:8,result:11,revers:6,review:1,reward:[9,11,12,13,14,16,18,20,22],rgb:19,rgb_arrai:20,riedmil:1,right:[4,6,7,9,15,19],right_lane_reward:9,rightmost:9,risk:21,rlss:20,road:[0,3,6,7,8,9,11,12,13,14,15,18,19,21,22],road_network:5,road_object:5,roadgraph:15,roadnetwork:[2,4,5,18],roadobject:[5,8,15],roadobjectgraph:15,roadsurfac:15,robust:21,room:12,rotat:15,roundabout:[10,15,20],roundabout_env:14,roundaboutenv:14,rout:[6,7,14],row:19,rudimentari:11,rule:4,run:[18,19],rusu:1,s_g:21,sac:20,sadik:1,safe:[6,12,21],safeti:6,same:[6,7,8],sampl:[0,18],satisfi:21,save:[7,20],scale:[9,11,12,13,14,15,19,20,21],scene:[19,22],schedul:11,schneider:1,scienc:1,screen:15,screen_height:[9,11,12,13,14,15,19,20],screen_width:[9,11,12,13,14,15,19,20],second:[4,5,18],section:2,see:[18,19,21],see_behind:19,seed:18,self:18,separ:[0,15],sequenc:[3,6,7,8,15],server:19,set:[0,4,5,7,15,19,22],set_agent_action_sequ:15,set_agent_displai:15,set_mod:19,set_route_at_intersect:7,setpoint:0,sever:[0,6,9,11,13,14,18,19],shane:1,shape:19,shift:21,should:[4,6,15,18,19,21],show:[19,20],show_rect:15,show_trajectori:[9,12,13,14,20],side:[3,9,15],sign:8,signal:18,silver:1,similarli:0,simpl:[6,7,11,21],simpli:11,simplifi:18,simul:[0,1,6,7,9,11,13,14,15,18,19],simulation_frequ:[9,12,13,14,15,20],sin:[8,21],sin_h:[11,13,19],sinc:[11,19,21],sinelan:3,singl:[18,21],sinusoid:3,situat:11,size:[15,19],slightli:15,slip:8,slower:0,social:[1,20],some:[0,4,7,8,12,18,21],sometim:11,soon:12,sophist:11,sort:19,sourc:[0,3,4,5,6,7,8,9,11,12,13,14,15,18,19],space:[0,8,13,15,18,19],spawn_prob:11,specif:[9,11,12,13,14,15,19],specifi:[0,7,8,21],speed:[0,6,7,8,9,12,13,18,21],speed_control:7,speed_limit:3,speed_to_index:7,speed_to_index_default:7,spike:21,sqrt:6,stabl:20,stable_baselin:20,stack_siz:19,stackoverflow:15,stai:[9,19],start:[3,5,12,15,16],start_phas:3,state:[1,6,7,8,9,11,12,13,14,18,19,21],statist:1,steer:[0,6,7,8,13],steering_control:[6,7],steering_featur:6,steering_rang:0,step:[0,4,5,6,8,9,11,13,14,18,19,20],stig:1,still:18,stop:[4,6,8],store:[5,6,8],str:[5,6,7,8,18,19],straight:[3,9,19],straightforward:21,straightlan:3,string:5,stripe:15,stripe_length:15,stripe_spac:15,stripe_width:15,striped_lin:15,stripes_count:15,stuck:6,subclass:0,subplot:19,subvers:17,success:20,sudo:17,suffer:21,suggest:6,sum:19,sum_i:21,supplementari:[3,13],support:6,surf:15,surfac:22,symposium:1,system:[1,3,8,11,15],take:[0,4,6,19],tan:8,target:[0,4,6,7],target_lane_index:[6,7],target_spe:[6,7],target_veloc:6,task:[9,11,12,13,14,18,20],td3:20,term:[6,21],termin:[9,11,13,14,18,21],text:[6,7,21],than:[6,19,21],thank:15,thei:[0,4,6,12,15,19,21],them:[4,15,21],thh00:[1,6],thi:[0,6,9,11,12,14,17,18,19,21],thing:11,third:1,thirti:1,those:7,though:6,three:19,throttl:[0,7],through:[0,1,2,4,21],thu:[0,21],tild:6,time:[2,4,6,7,21,22],time_w:6,timer:6,timestep:[4,5,6,7,8,9,11,13,14,18],timetocollis:[12,14,19],timetocollisionobserv:19,titl:16,tobin:1,too:11,top:[0,7],topic:1,topolog:[5,18],track:[0,7],traffic:[1,11,12,14],train:16,trajectori:[1,7,20,21],trajectory_timestep:7,transit:20,transpar:15,transport:1,treiber:1,trigger:6,ttf2:17,tupl:[0,3,5,6,7,8,9,11,13,14,15,18],turn:7,tutori:20,two:[2,4,6,7,15,21],type:[0,3,9,11,12,13,14,18,19,20],unavail:0,uncertain:21,under:7,underbrac:6,uniform:19,union:[0,3,6,7,8,15,18],uniqu:5,unsaf:6,until:[4,8,9,11,13,14,18],updat:[7,8,15,17,19],url:16,use:[13,16,18,21],used:[0,6,8,13,18,19],useful:18,user:[16,17],using:[0,6,15,17,19,20],usual:4,v_0:6,v_r:7,v_x:21,v_y:[19,21],valu:[18,19],variat:7,variou:18,vec2pix:15,vec:15,vehicl:[0,1,4,5,6,7,8,9,11,12,13,14,15,20,21,22],vehicle_class:[0,18],vehicle_class_path:18,vehiclegraph:15,vehicles_count:[9,11,19,20],veloc:[0,4,6,7,21],veness:1,verbos:20,verg:13,version:17,video:18,viewer:[15,18],visual:15,volodymyr:1,w_i:21,wai:[4,11],wait:11,want:18,weight:[6,13,19,21],welcom:[11,18],welind:1,what:19,wheel:[6,7,8],when:[4,6,7,9,19],where:[0,5,6,7,8,13,18,19,21],whether:[3,6,15,18],which:[0,4,5,6,11,13,15,17,18,19,21],who:4,whole:18,whose:[5,6],why:6,width:[3,8,15],width_at:3,wierstra:1,window:15,window_posit:15,wish:21,within:19,without:[15,19],wojciech:1,wolski:1,won:18,workshop:1,world:[3,22],worldsurfac:15,would:[15,21],wrapper:18,written:20,wrong:6,x_g:21,x_i:21,y_g:21,yaw:7,year:16,yield:[4,7,21],you:[16,18],your:[16,22],your_env:18,yourenv:18,zaremba:1,zero:[9,19],zoom:15},titles:["Actions","Bibliography","Dynamics","Lane","Road regulation","Road","Behavior","Control","Kinematics","Highway","The Environments","Intersection","Merge","Parking","Roundabout","Graphics","Welcome to highway-env\u2019s documentation!","Installation","Make your own environment","Observations","Getting Started","Rewards","User Guide"],titleterms:{"default":[9,11,12,13,14],The:10,action:0,agent:20,all:20,api:[0,3,4,5,6,7,8,9,11,12,13,14,15,18,19],behavior:6,bibliographi:1,bit:19,cite:16,close:19,colab:20,collis:19,configur:[9,11,12,13,14,18,19,20],content:16,continu:0,control:[0,7],creat:18,discret:0,document:16,drive:19,dynam:2,east:19,ego:19,env:16,environ:[10,18,20,21],exampl:[19,20],farther:19,featur:19,file:18,get:20,goal:21,googl:20,graphic:15,grayscal:19,grid:19,guid:22,head:7,highwai:[9,16],how:16,illustr:19,imag:19,instal:17,intersect:11,kinemat:[8,19],lane:3,later:[6,7],latest:17,longitudin:[6,7],make:[18,20],manual:0,mechan:19,merg:12,meta:0,most:21,north:19,observ:19,occup:19,one:19,own:18,park:13,posit:7,prerequisit:17,presenc:19,profit:18,regist:18,regul:4,releas:17,reward:21,road:[2,4,5],roundabout:14,same:19,scene:[15,18],set:18,slower:19,speed:19,stack:19,start:20,surfac:15,thi:16,time:19,train:20,ubuntu:17,usag:[9,11,12,13,14],user:22,v_x:19,vehicl:[2,18,19],welcom:16,window:17,work:16,world:15,your:18}})