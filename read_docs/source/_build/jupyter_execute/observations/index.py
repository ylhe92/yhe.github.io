import gym
import highway_env

config = {
    "observation": {
        "type": "Kinematics",
        "vehicles_count": 15,
        "features": ["presence", "x", "y", "vx", "vy", "cos_h", "sin_h"],
        "features_range": {
            "x": [-100, 100],
            "y": [-100, 100],
            "vx": [-20, 20],
            "vy": [-20, 20]
        },
        "absolute": False,
        "order": "sorted"
    }
}
env = gym.make('highway-v0')
env.configure(config)
obs = env.reset()
print(obs)

from matplotlib import pyplot as plt
%matplotlib inline

screen_width, screen_height = 84, 84
config = {
    "offscreen_rendering": True,
    "observation": {
        "type": "GrayscaleObservation",
        "weights": [0.2989, 0.5870, 0.1140],  # weights for RGB conversion
        "stack_size": 4,
        "observation_shape": (screen_width, screen_height)
    },
    "screen_width": screen_width,
    "screen_height": screen_height,
    "scaling": 1.75,
    "policy_frequency": 2
}
env.configure(config)
obs = env.reset()

_, axes = plt.subplots(ncols=4, figsize=(12, 5))
for i, ax in enumerate(axes.flat):
    ax.imshow(obs[..., i], cmap=plt.get_cmap('gray'))
plt.show()

for _ in range(3):
    obs, _, _, _ = env.step(env.action_type.actions_indexes["IDLE"])

    _, axes = plt.subplots(ncols=4, figsize=(12, 5))
    for i, ax in enumerate(axes.flat):
        ax.imshow(obs[..., i], cmap=plt.get_cmap('gray'))
plt.show()